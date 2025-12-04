import React, { useState } from "react";
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
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
    Link
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Helmet } from "react-helmet";

/* -------------------------------------------------
   ✅ IMPORT ALL LAGOON IMAGES PROPERLY
--------------------------------------------------*/

// Featured Images
// Featured Images
const featuredImages = [
    { id: 1, src: "/images/lagoon_34.jpeg", alt: "Gallery Photo 1" },
    { id: 2, src: "/images/lagoon_35.jpeg", alt: "Gallery Photo 2" },
    { id: 3, src: "/images/lagoon_36.jpeg", alt: "Gallery Photo 3" },
    { id: 4, src: "/images/lagoon_32.jpeg", alt: "Gallery Photo 4" },
    { id: 5, src: "/images/lagoon_31.jpeg", alt: "Gallery Photo 5" },
    { id: 6, src: "/images/lagoon_33.jpeg", alt: "Gallery Photo 6" },
    { id: 7, src: "/images/lagoon_37.jpeg", alt: "Gallery Photo 7" },
    { id: 8, src: "/images/lagoon_1.jpg", alt: "Gallery Photo 8" },
    { id: 9, src: "/images/lagoon_38.jpeg", alt: "Gallery Photo 9" },
];

// Gallery Images
const galleryImages = [
    { id: 2, src: "/images/lagoon_2.jpg", alt: "Gallery Photo 2" },
    { id: 4, src: "/images/lagoon_4.jpg", alt: "Gallery Photo 4" },
    { id: 5, src: "/images/lagoon_5.jpg", alt: "Gallery Photo 5" },
    { id: 6, src: "/images/lagoon_6.jpg", alt: "Gallery Photo 6" },
    { id: 7, src: "/images/lagoon_7.jpg", alt: "Gallery Photo 7" },
    { id: 8, src: "/images/lagoon_8.jpg", alt: "Gallery Photo 8" },
    { id: 9, src: "/images/lagoon_21.jpg", alt: "Gallery Photo 9" },
    { id: 10, src: "/images/lagoon_22.jpg", alt: "Gallery Photo 10" },
    { id: 11, src: "/images/lagoon_23.jpg", alt: "Gallery Photo 11" },
    { id: 12, src: "/images/lagoon_24.jpg", alt: "Gallery Photo 12" },
    { id: 13, src: "/images/lagoon_25.jpg", alt: "Gallery Photo 13" },
    { id: 14, src: "/images/lagoon_26.jpg", alt: "Gallery Photo 14" },
    { id: 15, src: "/images/lagoon_27.jpg", alt: "Gallery Photo 15" },
    { id: 16, src: "/images/lagoon_28.jpg", alt: "Gallery Photo 16" },
    { id: 17, src: "/images/lagoon_9.jpg", alt: "Gallery Photo 17" },
    { id: 18, src: "/images/lagoon_10.jpg", alt: "Gallery Photo 18" },
    { id: 19, src: "/images/lagoon_11.jpg", alt: "Gallery Photo 19" },
    { id: 20, src: "/images/lagoon_12.jpg", alt: "Gallery Photo 20" },
    { id: 21, src: "/images/lagoon_13.jpg", alt: "Gallery Photo 21" },
    { id: 22, src: "/images/lagoon_14.jpg", alt: "Gallery Photo 22" },
    { id: 23, src: "/images/lagoon_15.jpg", alt: "Gallery Photo 23" },
    { id: 24, src: "/images/lagoon_16.jpg", alt: "Gallery Photo 24" },
    { id: 25, src: "/images/lagoon_17.jpg", alt: "Gallery Photo 25" },
    { id: 26, src: "/images/lagoon_18.jpg", alt: "Gallery Photo 26" },
    { id: 27, src: "/images/lagoon_19.jpg", alt: "Gallery Photo 27" },
    { id: 28, src: "/images/lagoon_20.jpg", alt: "Gallery Photo 28" },
    { id: 29, src: "/images/lagoon_29.jpg", alt: "Gallery Photo 29" },
    { id: 30, src: "/images/lagoon_30.jpg", alt: "Gallery Photo 30" },
    { id: 31, src: "/images/lagoon_50.jpeg", alt: "Gallery Photo 31" },
    { id: 32, src: "/images/lagoon_51.jpeg", alt: "Gallery Photo 32" },
];

/* -------------------------------------------------
   Styled Button (unchanged)
--------------------------------------------------*/

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

/* -------------------------------------------------
   Component Logic (unchanged)
--------------------------------------------------*/

const Lagoon = () => {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down("sm"));

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allImages, setAllImages] = useState([]);

    const openLightbox = (images, index) => {
        setAllImages(images);
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = () =>
        setCurrentIndex((prev) =>
            prev === 0 ? allImages.length - 1 : prev - 1
        );

    const nextImage = () =>
        setCurrentIndex((prev) =>
            prev === allImages.length - 1 ? 0 : prev + 1
        );

    /* ⛔ Your request: DO NOT modify anything below here */




return (
    <Box sx={{ bgcolor: "#f8fbfc", pb: 8 }}>

        <Helmet>
            {/* Page Title */}
            <title>Lagoon Bird Watching Tour in Kalametiya | Nature Lover’s Inn Sri Lanka</title>

            {/* Description */}
            <meta
                name="description"
                content="Experience the best lagoon bird watching tour in Kalametiya, Sri Lanka. Enjoy peaceful boat rides, spot rare birds, and explore the stunning Kalametiya wetlands with Nature Lover’s Inn."
            />

            {/* SEO Keywords */}
            <meta
                name="keywords"
                content="Kalametiya Bird watching, Lagoon tour Kalametiya, Bird watching Sri Lanka, Kalametiya Bird Sanctuary, Tangalle lagoon safari, Nature Lovers Inn, eco tourism Sri Lanka, Bird watching sri lanka"
            />

            <meta name="author" content="Nature Lover’s Inn" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://www.natureloversinn.com/lagoon-tour" />

            {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Lagoon Bird Watching Tour in Kalametiya | Nature Lover’s Inn" />
            <meta
                property="og:description"
                content="Join our guided lagoon bird watching tour in Kalametiya. Spot rare birds, enjoy boat rides, and explore natural wetlands in Sri Lanka."
            />
            <meta property="og:url" content="https://www.natureloversinn.com/lagoon-tour" />
            <meta
                property="og:image"
                content="/images/lagoon_32.jpeg"
            />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Lagoon Bird Watching Tour in Kalametiya | Nature Lover’s Inn" />
            <meta
                name="twitter:description"
                content="Explore Kalametiya Lagoon in Tangalle with our bird watching tour. Discover exotic birds and the natural beauty of Sri Lanka."
            />
            <meta
                name="twitter:image"
                content="/images/lagoon_32.jpeg"
            />

            {/* ACTIVITY JSON-LD SCHEMA */}
            <script type="application/ld+json">
                {`
            {
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "Kalametiya Lagoon Bird Watching Tour",
              "description": "Guided lagoon bird watching tour in Kalametiya. Spot rare and migratory birds with expert local guides.",
              "url": "https://www.natureloversinn.com/lagoon-tour",
              "image": "/images/lagoon_32.jpeg",
              "touristType": [
                "Bird Watchers",
                "Eco Tourists",
                "Nature Lovers"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalametiya",
                "addressRegion": "Tangalle",
                "addressCountry": "Sri Lanka"
              },
              "provider": {
                "@type": "Organization",
                "name": "Nature Lover’s Inn",
                "url": "https://www.natureloversinn.com"
              }
            }
            `}
            </script>
        </Helmet>


        {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
            py: { xs: 5, md: 8 },
          px: 2,
          background: "linear-gradient(135deg, #0287a8, #00c3c7)",
          color: "#fff",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          mb: 6,
        }}
      >
        <Typography variant={isSm ? "h5" : "h3"} fontWeight={800} gutterBottom>
          Escape into Nature at Kalametiya Bird Lagoon 🌿
        </Typography>
        <Typography
            variant={isSm ? "body1" : "h6"}
          sx={{ maxWidth: 700, mx: "auto", fontWeight: 400, opacity: 0.95 }}
        >
          Discover the breathtaking beauty of Sri Lanka’s wetlands with our{" "}
          <b>Boat Rides & Bird Watching Tours</b>. Spot 120+ species of local and
          migratory birds, enjoy eco-friendly boat rides, and immerse yourself in
          untouched nature.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* Top Featured Images */}
        <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
          {featuredImages.map(({ id, src }, index) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 5,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 10 },
                  cursor: "pointer",
                }}
                onClick={() => openLightbox(featuredImages, index)}
              >
                <CardMedia
                  component="img"
                  image={src}
                  sx={{
                      width: {xs:300, sm: 330, md: 350 },
                      height: "auto", // ✅ auto height to remove white gaps
                      maxHeight: {xs:180, sm: 210, md: 210 },
                      objectFit: "cover",
                }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Activities Section */}
          <Box sx={{ mb: { xs: 4, sm: 5, md: 6 }, textAlign: "center", px: { xs: 2, sm: 3, md: 0 } }}>
              {/* Heading */}
              <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                      color: "primary.main",
                      mb: { xs: 1, sm: 1.5, md: 2 },
                      fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                      lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
                  }}
              >
                  #1 One Tour In…
              </Typography>

              {/* Subtitle */}
              <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                      mb: { xs: 2, sm: 2.5, md: 3 },
                      fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                      lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 },
                      maxWidth: { xs: "90%", sm: "75%", md: "60%" },
                      mx: "auto",
                  }}
              >
                  Discover unforgettable activities
              </Typography>

              {/* Activities Grid */}
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                  {[
                      "Bird Watching",
                      "Paddle Boats Safari",
                      "Bird Photography",
                      "Rock Climbing",
                      "Jungle Walk",
                      "Sunset View",
                  ].map((activity, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                          <Card sx={{ borderRadius: 3, boxShadow: 2, height: "100%" }}>
                              <CardContent>
                                  <Typography
                                      variant="body1"
                                      fontWeight={600}
                                      textAlign="center"
                                      sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
                                  >
                                      {activity}
                                  </Typography>
                              </CardContent>
                          </Card>
                      </Grid>
                  ))}
              </Grid>
          </Box>



          {/* Tour Details & Packages */}
        <Card
          sx={{
            borderRadius: 4,
              p: { xs: 2, sm: 3, md: 4 },
            boxShadow: 5,
            backgroundColor: "background.paper",
            mb: 8,
          }}
        >
          <Typography variant="h5" fontWeight={700} gutterBottom>
            What’s Included in Your Tour
          </Typography>

          <List>
            {[
              "Binoculars for birdwatching",
              "Life Jackets for safety",
              "Umbrellas for comfort",
              "Refreshments (Chips, Fruits, Water Bottles)",
            ].map((item, i) => (
              <ListItem key={i} disableGutters>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={2}>
            {[
              { icon: <PlaceIcon color="primary" />, label: "Location", value: "Kalametiya Bird Sanctuary" },
              { icon: <AccessTimeIcon color="primary" />, label: "Duration", value: "2-3 hours" },
              { icon: <GroupIcon color="primary" />, label: "Max Guests", value: "4 foreign guests per paddle boat" },
              { icon: <EmojiNatureIcon color="primary" />, label: "Birds", value: "120+ local & migratory species" },
            ].map((detail, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box display="flex" alignItems="center">
                  {detail.icon}
                  <Typography variant="body1" sx={{ ml: 1.5 }}>
                    <b>{detail.label}:</b> {detail.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={700} gutterBottom>
            Packages
          </Typography>
          <Grid container spacing={2}>
            {[
              { persons: "1 Person", price: "24$" },
              { persons: "2 Persons", price: "27$" },
              { persons: "3 Persons", price: "30$" },
              { persons: "4 Persons", price: "34$" },
            ].map((pkg, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 2,
                      textAlign: "center",
                      "&:hover": { backgroundColor: "action.hover" },
                  }}
                >
                  <Typography variant="body1" fontWeight={600}>
                    {pkg.persons}
                  </Typography>
                  <Typography variant="h6" color="primary.main" fontWeight={700}>
                    {pkg.price}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Contact Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 6 ,width: "100%" }}
        >
          <StyledButton
              fullWidth
            variant="contained"
            color="success"
            startIcon={<WhatsAppIcon />}
            component={Link}
            href="https://wa.me/94760169518"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </StyledButton>

          <StyledButton
              fullWidth
            variant="outlined"
            color="primary"
            startIcon={<EmailIcon />}
            component={Link}
            href="mailto:natureloversinn10@gmail.com?subject=Booking%20Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20tours."
          >
            Gmail
          </StyledButton>

          <StyledButton
              fullWidth
            variant="contained"
            color="primary"
            startIcon={<DirectionsBoatIcon />}
            component={Link}
            href="/contact"
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

        <Grid container spacing={3} justifyContent="center">
          {galleryImages.map(({ id, src, alt }, index) => (
            <Grid item xs={6} sm={4} md={3} key={id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onClick={() => openLightbox(galleryImages, index)}
              >
                <CardMedia
                  component="img"
                  image={src}
                  alt={alt}
                  sx={{
                      width: {xs:310, sm: 330, md: 360 },
                      height: "auto", // ✅ auto height to remove white gaps
                      maxHeight: {xs:300, sm: 280, md: 300 }, // limit too tall images
                      objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Lightbox Popup */}
        {lightboxOpen && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              bgcolor: "rgba(0,0,0,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 20, right: 20, color: "#fff", zIndex: 10000 }}
              onClick={closeLightbox}
            >
              <CloseIcon fontSize={isSm ? "medium" : "large"} />
            </IconButton>

            <IconButton
              sx={{ position: "absolute", left: isSm ? 10 : 40, color: "#fff" }}
              onClick={prevImage}
            >
              <ArrowBackIosNewIcon fontSize={isSm ? "medium" : "large"} />
            </IconButton>

            <Box
              component="img"
              src={allImages[currentIndex].src}
              alt={allImages[currentIndex].alt}
              sx={{
                  maxHeight: "85vh",
                  maxWidth: "95vw",
                borderRadius: 2,
              }}
            />

            <IconButton
              sx={{ position: "absolute", right: isSm ? 10 : 40, color: "#fff" }}
              onClick={nextImage}
            >
              <ArrowForwardIosIcon fontSize={isSm ? "medium" : "large"} />
            </IconButton>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Lagoon;
