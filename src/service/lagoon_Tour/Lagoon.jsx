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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
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
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";


// Top 8 Featured Images
const featuredImages = [
  { id: 1, src: "src/assets/image/lagoon_34.jpeg", alt: "Gallery Photo 1" },
  { id: 2, src: "src/assets/image/lagoon_35.jpeg", alt: "Gallery Photo 2" },
  { id: 3, src: "src/assets/image/lagoon_36.jpeg", alt: "Gallery Photo 3" },
  { id: 4, src: "src/assets/image/lagoon_32.jpeg", alt: "Gallery Photo 4" },
  { id: 5, src: "src/assets/image/lagoon_31.jpeg", alt: "Gallery Photo 5" },
  { id: 6, src: "src/assets/image/lagoon_33.jpeg", alt: "Gallery Photo 6" },
  { id: 7, src: "src/assets/image/lagoon_37.jpeg", alt: "Gallery Photo 7" },
  { id: 8, src: "src/assets/image/lagoon_1.jpg", alt: "Gallery Photo 8"},
  { id: 9, src: "src/assets/image/lagoon_38.jpeg", alt: "Gallery Photo 9"},
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
          {featuredImages.map(({ id, src }) => (
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

                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                  }}
                />

              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: "primary.main", mb: 1 }}
          >
            #1 One Tour In…
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Discover unforgettable activities
          </Typography>

          <Grid container spacing={2} sx={{ mt: 3, justifyContent: "center" }}>
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
                      >
                        {activity}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Box>

        <Card
            sx={{
              borderRadius: 4,
              p: 4,
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
              { persons: "1 Person", price: "10$" },
              { persons: "2 Persons", price: "15$" },
              { persons: "3 Persons", price: "20$" },
              { persons: "4 Persons", price: "40$" },
            ].map((pkg, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Card
                      sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        p: 2,
                        textAlign: "center",
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
