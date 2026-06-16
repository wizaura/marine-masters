import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

export async function POST(
    request: Request
) {
    try {
        const {
            name,
            email,
            phone,
            company,
            country,
            productRequired,
            quantity,
            message,
        } = await request.json();

        await resend.emails.send({
            from: "Marine Masters <onboarding@resend.dev>",
            to: process.env.ADMIN_EMAIL!,
            replyTo: email,
            subject: `New RFQ Submission - ${name}`,
            html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;">
            
            <h1 style="margin-bottom:0;">
                New Website Inquiry
            </h1>

            <p style="color:#666;">
                A new request has been submitted through the Marine Masters website.
            </p>

            <hr style="margin:24px 0;" />

            <h2>Contact Information</h2>

            <table style="width:100%;border-collapse:collapse;">
                <tr>
                    <td style="padding:8px 0;"><strong>Name</strong></td>
                    <td>${name}</td>
                </tr>

                <tr>
                    <td style="padding:8px 0;"><strong>Company</strong></td>
                    <td>${company || "-"}</td>
                </tr>

                <tr>
                    <td style="padding:8px 0;"><strong>Email</strong></td>
                    <td>${email}</td>
                </tr>

                <tr>
                    <td style="padding:8px 0;"><strong>Phone</strong></td>
                    <td>${phone || "-"}</td>
                </tr>

                <tr>
                    <td style="padding:8px 0;"><strong>Country</strong></td>
                    <td>${country || "-"}</td>
                </tr>
            </table>

            <hr style="margin:24px 0;" />

            <h2>Inquiry Details</h2>

            <table style="width:100%;border-collapse:collapse;">
                <tr>
                    <td style="padding:8px 0;"><strong>Product Required</strong></td>
                    <td>${productRequired || "-"}</td>
                </tr>

                <tr>
                    <td style="padding:8px 0;"><strong>Quantity</strong></td>
                    <td>${quantity || "-"}</td>
                </tr>
            </table>

            <h2 style="margin-top:32px;">
                Message
            </h2>

            <div
                style="
                    background:#f5f5f5;
                    padding:20px;
                    border-radius:12px;
                    line-height:1.6;
                "
            >
                ${message || "No message provided"}
            </div>

            <hr style="margin:32px 0;" />

            <p style="color:#777;font-size:14px;">
                Submitted via Marine Masters Website
            </p>

        </div>
    `,
        });

        await resend.emails.send({
            from: "Marine Masters <onboarding@resend.dev>",
            to: email,
            subject: "We Have Received Your Inquiry",
            html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;">

            <h1>
                Thank You, ${name}
            </h1>

            <p>
                We have successfully received your inquiry and our team
                will review the details shortly.
            </p>

            <p>
                One of our marine equipment specialists will contact you
                as soon as possible regarding your request.
            </p>

            <div
                style="
                    margin:24px 0;
                    padding:20px;
                    background:#f7f7f7;
                    border-radius:12px;
                "
            >
                <h3 style="margin-top:0;">
                    Inquiry Summary
                </h3>

                <p>
                    <strong>Product Required:</strong>
                    ${productRequired || "-"}
                </p>

                <p>
                    <strong>Quantity:</strong>
                    ${quantity || "-"}
                </p>

                <p>
                    <strong>Company:</strong>
                    ${company || "-"}
                </p>
            </div>

            <p>
                If your request is urgent, please reply directly to this
                email and our team will prioritize your inquiry.
            </p>

            <br />

            <p>
                Best Regards,
            </p>

            <p>
                <strong>Marine Masters</strong><br/>
                Marine Engine Parts & Machinery Solutions
            </p>

        </div>
    `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}