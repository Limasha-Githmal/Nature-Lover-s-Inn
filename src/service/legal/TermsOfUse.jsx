import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { Helmet } from "react-helmet";

export default function TermsOfUse() {
    const effectiveDate = "September 26, 2025"; // << update as needed

    return (
        <Box sx={{ bgcolor: "#f8fbfc", minHeight: "100vh", py: { xs: 6, md: 10 } }}>
            <Helmet>
                <title>Terms of Use | Nature Lover's Inn - Kalametiya</title>
                <meta
                    name="description"
                    content="Terms of Use for Nature Lover's Inn website — bookings, tours, and services in Kalametiya, Tangalle, Sri Lanka."
                />
                <meta name="robots" content="index,follow" />
            </Helmet>

            <Container maxWidth="md">
                <Typography variant="h3" fontWeight={800} gutterBottom>
                    Terms of Use
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Effective date: {effectiveDate}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    1. Acceptance of terms
                </Typography>
                <Typography paragraph>
                    These Terms of Use ("Terms") govern your access to and use of the website, services, and booking
                    platform provided by Nature Lover's Inn ("we", "us", "our"). By using our website or booking any
                    service (rooms, lagoon tours, jungle walks, cooking classes, etc.), you agree to these Terms.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    2. Bookings, payments & cancellations
                </Typography>
                <Typography paragraph>
                    Booking terms (availability, pricing and payment) are displayed at checkout. Payment methods and
                    deposit requirements depend on the service. Cancellation rules vary by package — we will clearly
                    display cancellation and refund policies with each booking. For last-minute cancellations or
                    no-shows, cancellation fees may apply.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    3. Pricing & changes
                </Typography>
                <Typography paragraph>
                    We reserve the right to modify prices, descriptions, and itinerary for tours and services. If we
                    make material changes after you book, we will notify you and offer reasonable alternatives or a refund
                    if appropriate.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    4. Health & safety
                </Typography>
                <Typography paragraph>
                    Guests participate in tours and activities at their own risk. You must follow guide instructions and
                    inform us about any health conditions or mobility limitations before booking. We may refuse participation
                    if safety could be compromised.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    5. Intellectual property
                </Typography>
                <Typography paragraph>
                    All content on this website (text, images, logos) is owned or licensed by Nature Lover's Inn. You may
                    view and download a single copy for personal use, but you must not reproduce, distribute, or create
                    derivative works without our permission.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    6. Third-party links
                </Typography>
                <Typography paragraph>
                    Our website may contain links to third-party sites (Booking.com, Airbnb, TripAdvisor, etc.). We do not
                    control those sites and are not responsible for their content, privacy practices or services.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    7. Limitation of liability
                </Typography>
                <Typography paragraph>
                    To the fullest extent permitted by law, Nature Lover's Inn (and its owners, employees, agents) will not
                    be liable for indirect, special, incidental, or consequential damages arising out of your use of the
                    website or participation in tours, except where liability cannot be excluded by law.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    8. Governing law
                </Typography>
                <Typography paragraph>
                    These Terms are governed by the laws of Sri Lanka. Any dispute arising from these Terms shall be subject
                    to the exclusive jurisdiction of the courts in Sri Lanka, unless otherwise required by law.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    9. Changes to these Terms
                </Typography>
                <Typography paragraph>
                    We may update these Terms occasionally. We will post the updated Terms and the effective date on this page.
                    Continued use after changes constitutes acceptance.
                </Typography>

                <Typography variant="h6" fontWeight={700} gutterBottom>
                    10. Contact
                </Typography>
                <Typography paragraph>
                    If you have questions about these Terms, contact us at: natureloversinn10@gmail.com or WhatsApp +94 76 016 9518.
                </Typography>
            </Container>
        </Box>
    );
}
