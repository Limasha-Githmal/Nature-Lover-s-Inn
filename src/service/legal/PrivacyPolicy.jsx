// src/service/legal/PrivacyPolicy.jsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
    const effectiveDate = "September 26, 2025"; // << update as needed

    return (
        <Box sx={{ bgcolor: "#f8fbfc", minHeight: "100vh", py: { xs: 6, md: 10 } }}>
            <Helmet>
                <title>Privacy Policy | Nature Lover's Inn - Kalametiya</title>
                <meta
                    name="description"
                    content="Privacy Policy for Nature Lover's Inn — how we collect, use and protect your personal information for bookings and tours in Kalametiya, Sri Lanka."
                />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Container maxWidth="md">
                <Typography variant="h3" fontWeight={800} gutterBottom>
                    Privacy Policy
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Effective date: {effectiveDate}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    1. Information we collect
                </Typography>
                <Typography paragraph>
                    We collect information you provide when you book or contact us (name, email, phone, booking details),
                    payment details (processed by third-party payment providers), and usage data (site visits, cookies).
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    2. How we use your information
                </Typography>
                <Typography paragraph>
                    We use your data to: process bookings and payments, communicate booking confirmations/updates, improve
                    services and our website, comply with legal obligations, and for marketing if you consent.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    3. Legal basis & consent
                </Typography>
                <Typography paragraph>
                    When required by law, we rely on consent, contract performance (booking) or legitimate interests (service
                    improvements). You may withdraw consent for marketing at any time by contacting us.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    4. Cookies & tracking
                </Typography>
                <Typography paragraph>
                    We use cookies and similar technologies to operate the site, analyze usage and personalize content. You can
                    disable some cookies in your browser settings (note that disabling cookies may affect site functionality).
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    5. Sharing & third parties
                </Typography>
                <Typography paragraph>
                    We share information with service providers (payment processors, booking platforms, analytics providers)
                    and when required by law. Third-party providers have their own privacy policies.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    6. Data security & retention
                </Typography>
                <Typography paragraph>
                    We apply reasonable security measures to protect your data. We retain personal data only as long as needed
                    for the purposes described (bookings, legal obligations, etc.).
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    7. Your rights
                </Typography>
                <Typography paragraph>
                    Depending on your jurisdiction you may have rights to access, correct, delete or restrict processing of your
                    personal data. To exercise those rights, contact us at natureloversinn10@gmail.com.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    8. International transfers
                </Typography>
                <Typography paragraph>
                    Your data may be processed in countries outside your jurisdiction (e.g., by our hosting or payment partners).
                    We take reasonable steps to protect your data.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    9. Children
                </Typography>
                <Typography paragraph>
                    Our services are not intended for children under 16. We do not knowingly collect personal data from children.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    10. Contact & updates
                </Typography>
                <Typography paragraph>
                    Questions? Email: natureloversinn10@gmail.com or WhatsApp +94 76 016 9518. We may update this Privacy Policy;
                    when we do we will post the new effective date here.
                </Typography>
            </Container>
        </Box>
    );
}
