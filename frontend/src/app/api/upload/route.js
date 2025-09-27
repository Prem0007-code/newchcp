import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract fields
    const Name = formData.get('Name');
    const Email = formData.get('Email');
    const Role = formData.get('Role');
    const date = formData.get('date');
    const time = formData.get('time');
    const meetLink = formData.get('meetLink');
    const notes = formData.get('notes');
    const resume = formData.get('resume'); // This is a File if provided

    // Basic validation
    if (!Name || !Email || !date || !time) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // NOTE: Add your persistence here (DB insert, email, Google Sheets, etc.)
    // For now, just log to the server for visibility.
    console.log('[After-Registration] New submission:', {
      Name,
      Email,
      Role,
      date,
      time,
      meetLink,
      notes,
      resumeName: resume?.name || null,
      resumeType: resume?.type || null,
      resumeSize: resume?.size || null,
    });

    // If you want to persist the file somewhere (S3, disk, etc.), you can access its bytes like this:
    // if (resume) {
    //   const bytes = await resume.arrayBuffer();
    //   const buffer = Buffer.from(bytes);
    //   // Upload buffer to your storage here
    // }

    return NextResponse.json({ message: 'Saved successfully' }, { status: 200 });
  } catch (err) {
    console.error('Upload API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
