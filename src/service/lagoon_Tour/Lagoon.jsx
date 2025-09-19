import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  useMediaQuery,
  Link,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

// Top 8 Featured Images
const featuredImages = [
  { id: 1, src: "src/assets/image/lagoon_1.jpg", alt: "Gallery Photo 1" },
  { id: 2, src: "src/assets/image/lagoon_2.jpg", alt: "Gallery Photo 2" },
  { id: 3, src: "src/assets/image/lagoon_3.jpg", alt: "Gallery Photo 3" },
  { id: 4, src: "src/assets/image/lagoon_4.jpg", alt: "Gallery Photo 4" },
  { id: 5, src: "src/assets/image/lagoon_5.jpg", alt: "Gallery Photo 5" },
  { id: 6, src: "src/assets/image/lagoon_6.jpg", alt: "Gallery Photo 6" },
  { id: 7, src: "src/assets/image/lagoon_7.jpg", alt: "Gallery Photo 7" },
  { id: 8, src: "src/assets/image/lagoon_8.jpg", alt: "Gallery Photo 8"},
];

// Last 20 Gallery Images
const galleryImages = [
  { id: 2, src: "src/assets/image/lagoon_2.jpg", alt: "Gallery Photo 2" },
  { id: 4, src: "src/assets/image/lagoon_4.jpg", alt: "Gallery Photo 4" },
  { id: 5, src: "src/assets/image/lagoon_5.jpg", alt: "Gallery Photo 5" },
  { id: 6, src: "src/assets/image/lagoon_6.jpg", alt: "Gallery Photo 6" },
  { id: 7, src: "src/assets/image/lagoon_7.jpg", alt: "Gallery Photo 7" },
  { id: 8, src: "src/assets/image/lagoon_8.jpg", alt: "Gallery Photo 8"},
  { id: 9, src: "src/assets/image/lagoon_21.jpg", alt: "Gallery Photo 1" },
  { id: 10, src: "src/assets/image/lagoon_22.jpg", alt: "Gallery Photo 2" },
  { id: 11, src: "src/assets/image/lagoon_23.jpg", alt: "Gallery Photo 3" },
  { id: 12, src: "src/assets/image/lagoon_24.jpg", alt: "Gallery Photo 4" },
  { id: 13, src: "src/assets/image/lagoon_25.jpg", alt: "Gallery Photo 5" },
  { id: 14, src: "src/assets/image/lagoon_26.jpg", alt: "Gallery Photo 6" },
  { id: 15, src: "src/assets/image/lagoon_27.jpg", alt: "Gallery Photo 7" },
  { id: 16, src: "src/assets/image/lagoon_28.jpg", alt: "Gallery Photo 8" },
  { id: 17, src: "src/assets/image/lagoon_9.jpg", alt: "Gallery Photo 9" },
  { id: 18, src: "src/assets/image/lagoon_10.jpg", alt: "Gallery Photo 10" },
  { id: 19, src: "src/assets/image/lagoon_11.jpg", alt: "Gallery Photo 11" },
  { id: 20, src: "src/assets/image/lagoon_12.jpg", alt: "Gallery Photo 12" },
  { id: 21, src: "src/assets/image/lagoon_13.jpg", alt: "Gallery Photo 13" },
  { id: 22, src: "src/assets/image/lagoon_14.jpg", alt: "Gallery Photo 14" },
  { id: 23, src: "src/assets/image/lagoon_15.jpg", alt: "Gallery Photo 15" },
  { id: 24, src: "src/assets/image/lagoon_16.jpg", alt: "Gallery Photo 16" },
  { id: 25, src: "src/assets/image/lagoon_17.jpg", alt: "Gallery Photo 17" },
  { id: 26, src: "src/assets/image/lagoon_18.jpg", alt: "Gallery Photo 18" },
  { id: 27, src: "src/assets/image/lagoon_19.jpg", alt: "Gallery Photo 19" },
  { id: 28, src: "src/assets/image/lagoon_20.jpg", alt: "Gallery Photo 20" },
  { id: 29, src: "src/assets/image/lagoon_29.jpg", alt: "Gallery Photo 20" },
  { id: 30, src: "src/assets/image/lagoon_30.jpg", alt: "Gallery Photo 20" },

];

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "25px",
  padding: "12px 26px",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease",
  boxShadow: theme.shadows[3],
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: theme.shadows[8],
  },
}));

const Lagoon = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          px: 2,
          background: "linear-gradient(135deg, #0287a8, #00c3c7)",
          color: "#fff",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          mb: 6,
        }}
      >
        <Typography variant={isSm ? "h4" : "h3"} fontWeight={800} gutterBottom>
          Escape into Nature at Kalametiya Bird Lagoon 🌿
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
        >
          Discover the breathtaking beauty of Sri Lanka’s wetlands with our{" "}
          <b>Boat Rides & Bird Watching Tours</b>. Spot 120+ species of local and
          migratory birds, enjoy eco-friendly boat rides, and immerse yourself in
          untouched nature.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Top 8 Featured Images */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
          {featuredImages.map(({ id, src, alt }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 5,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={alt}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ textAlign: "center", py: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {alt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Tour Activities */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            align="center"
            sx={{ color: "#0287a8" }}
          >
            #1 ONE TOUR IN..
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ lineHeight: 1.8, whiteSpace: "pre-line" }}
          >
            1. Bird Watching {"\n"}
            2. Paddle Boats Safari {"\n"}
            3. Bird Photography {"\n"}
            4. Rock Climbing {"\n"}
            5. Jungle Walk {"\n"}
            6. Sunset View
          </Typography>
        </Box>

        {/* Tour Details */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
            p: 5,
            boxShadow: 4,
            mb: 8,
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            What’s Included in Your Tour
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {[
              "Binoculars for birdwatching",
              "Life Jackets for safety",
              "Umbrellas for comfort",
              "Refreshments (Chips, Fruits, Water Bottles)",
            ].map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Typography variant="body1">✔️ {item}</Typography>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ mt: 3, lineHeight: 1.8 }}>
            📍 <b>Location:</b> Kalametiya Bird Sanctuary <br />
            ⏱ <b>Duration:</b> 2-3 hours <br />
            👥 <b>Max Guests:</b> 4 foreign guests per paddle boat <br />
            🦩 <b>Birds:</b> 120+ local & migratory species <br />
            💰 <b>Price:</b> 30$ per person per ride
          </Typography>
        </Box>

        {/* Contact Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 6 }}
        >
          <StyledButton
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            component={Link}
            href="https://wa.me/yourWhatsAppNumber"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </StyledButton>

          <StyledButton
            variant="outlined"
            color="primary"
            startIcon={<EmailIcon />}
            component={Link}
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener"
          >
            Gmail
          </StyledButton>

          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<DirectionsBoatIcon />}
            onClick={() => alert("Booking functionality coming soon!")}
          >
            Book Tour
          </StyledButton>
        </Stack>

        {/* 20-Photo Gallery */}
        <Typography
          variant="h5"
          fontWeight={700}
          align="center"
          sx={{ color: "#0287a8", mb: 4 }}
        >
          📸 Explore Our Lagoon Moments
        </Typography>

        <Grid container spacing={3}>
          {galleryImages.map(({ id, src, alt }) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
                  transition: "0.3s",
                }}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={alt}
                  sx={{ width: "100%", height: 180, objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Lagoon;
