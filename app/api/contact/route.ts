import { NextResponse } from 'next/server';
import { db } from 'cosmic-database';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, business, phone, message } = data;
    
    if (!name || !email || !business || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' }, 
        { status: 400 }
      );
    }
    
    // Create contact submission document
    const contactData = {
      name,
      email,
      business,
      phone: phone || '',
      message,
      status: 'new',
      createdAt: db.FieldValue.serverTimestamp(),
      updatedAt: db.FieldValue.serverTimestamp()
    };
    
    // Add to database
    const docRef = await db.collection('contact_submissions').add(contactData);
    
    return NextResponse.json({ 
      success: true, 
      id: docRef.id,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' }, 
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    
    // Get contact submissions (for admin use if needed)
    const snapshot = await db.collection('contact_submissions')
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get();
    
    const submissions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}