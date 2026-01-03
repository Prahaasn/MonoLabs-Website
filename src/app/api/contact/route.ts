import { NextResponse } from 'next/server'

// Note: To use Resend, install it and add your API key to .env.local
// npm install resend
// RESEND_API_KEY=your_api_key_here

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // Send email using Resend
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: 'Mono Labs Contact <noreply@monolabs.co.in>', // Uses your verified domain
        to: ['contact@monolabs.co.in'], // Your contact email
        replyTo: data.email,
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${data.service || 'Not specified'}</p>
          <h3>Message:</h3>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      })
    } else {
      // Log the submission for development
      console.log('Contact form submission received:')
      console.log('Name:', data.name)
      console.log('Email:', data.email)
      console.log('Company:', data.company)
      console.log('Service:', data.service)
      console.log('Message:', data.message)
      console.log('---')
      console.log('Note: Set RESEND_API_KEY in .env.local to enable email sending')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
