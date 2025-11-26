import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Helmet } from "react-helmet";

const Restaurants = () => {
  const menuData = {
    categories: [
      {
        name: "Refreshments",
        items: [
          { name: "Fresh Lime Juice", description: "Rich in vitamin C & antioxidants. Refreshing & healthy.", price: "600" },
          { name: "Fresh Pineapple Juice", description: "Boosts immunity with natural vitamin C goodness.", price: "600" },
          { name: "Fresh Mango Juice", description: "Sweet, exotic, and rich in vitamin A & C.", price: "600" },
          { name: "Fresh Woodapple Juice", description: "Sweet, sour & creamy – a Sri Lankan classic.", price: "600" },
          { name: "Fresh Papaya Juice", description: "Smooth tropical drink, high in fiber & antioxidants.", price: "600" },
          { name: "Fresh Soursop Juice", description: "Sweet & tangy, packed with vitamin C & antioxidants.", price: "600" },
          { name: "Fresh Watermelon Juice", description: "Hydrating, rich in minerals and natural sweetness.", price: "600" },
          { name: "Fresh Mix Fruit Juice", description: "A blended tropical treat full of vitamins.", price: "750" },
          { name: "King Coconut", description: "Natural hydration, rich in magnesium & calcium.", price: "200" },
        ],
      },
      {
        name: "Asian & Western Mains",
        items: [
          { name: "Egg Fried Rice & 3 Curries", description: "Fusion of fluffy rice with aromatic curries.", price: "2100" },
          { name: "Normal Rice & 3 Curries", description: "Plain rice with curry for a comforting meal.", price: "800" },
          { name: "Egg Fried Rice", description: "Classic stir-fried rice with eggs.", price: "1800" },
          { name: "Egg Fried Noodles", description: "Noodles tossed with scrambled eggs & veggies.", price: "800" },
          { name: "Boiled Vegetables", description: "Steamed veggies – healthy & nutritious.", price: "800" },
          { name: "Pasta / Macaroni", description: "A global comfort food favorite.", price: "900" },
          { name: "Potato Chips", description: "Crispy & golden thin potato slices.", price: "1100" },
        ],
      },
      {
        name: "Soups",
        items: [
          { name: "Vegetable Soup", description: "Fresh garden veggies in a hearty broth.", price: "2400" },
          { name: "Egg Soup", description: "Light & comforting egg-drop style soup.", price: "2600" },
          { name: "Chicken Soup", description: "Traditional soup for warmth & energy.", price: "2700" },
        ],
      },
      {
        name: "Desserts",
        items: [
          { name: "Curd & Honey", description: "Creamy curd with golden honey drizzle.", price: "600" },
          { name: "Ice Cream", description: "Classic scoop of creamy delight.", price: "600" },
          { name: "Fruit Salad with Ice Cream", description: "Fresh fruits topped with ice cream.", price: "1600" },
          { name: "Mixed Fruit Plate", description: "A colorful mix of seasonal fruits.", price: "1200" },
        ],
      },
      {
        name: "Seafood & Meat Specials",
        items: [
          // Prawns
          { name: "Devilled Prawns", description: "Spicy & tangy Sri Lankan-style prawns.", price: "2900" },
          { name: "Fried Prawns", description: "Crispy golden fried jumbo prawns.", price: "2900" },
          { name: "Butter Prawns", description: "Rich buttery prawns with garlic.", price: "2900" },
          { name: "Traditional Prawns Milk Curry", description: "Creamy coconut milk prawn curry.", price: "3000" },
          { name: "Traditional Spicy Prawns Curry", description: "Hot & flavorful curry.", price: "3200" },

          // Crabs
          { name: "Devilled Crabs (Large)", description: "Spicy crab in Sri Lankan style.", price: "2900" },
          { name: "Devilled Crabs (Medium)", description: "Medium-sized spicy crabs.", price: "2900" },

          // Calamari
          { name: "Devilled Calamari", description: "Spicy stir-fried calamari.", price: "2900" },
          { name: "Fried Calamari", description: "Golden fried calamari rings.", price: "2900" },
          { name: "Butter Calamari", description: "Tender calamari with buttery garlic sauce.", price: "2900" },
          { name: "Traditional Calamari Milk Curry", description: "Calamari in coconut milk curry.", price: "3000" },
          { name: "Traditional Spicy Calamari Curry", description: "Fiery and bold calamari curry.", price: "3200" },

          // Lobster
          { name: "Lobster (100g)", description: "Boiled or pan-fried with butter.", price: "Day Price" },
          { name: "Lobster (1Kg)", description: "Boiled or pan-fried with butter.", price: "Day Price" },

          // Mullet Fish
          { name: "Mullet Fish Large", description: "Fresh lagoon mullet, large portion.", price: "3600" },
          { name: "Mullet Fish Medium", description: "Fresh lagoon mullet, medium portion.", price: "2700" },

          // Tuna
          { name: "Fried Tuna (Large)", description: "Crispy fried tuna steaks.", price: "3600" },
          { name: "Devilled Tuna", description: "Spicy tuna curry.", price: "2700" },
          { name: "Traditional Tuna Milk Curry", description: "Tuna in creamy coconut curry.", price: "3200" },

          // Caranx
          { name: "Fried Caranx Fish (Large)", description: "Golden fried large caranx fish.", price: "3000" },
          { name: "Fried Caranx Fish (Medium)", description: "Golden fried medium caranx fish.", price: "2400" },
          { name: "Traditional Caranx Fish Milky Curry", description: "Caranx fish in coconut milk curry.", price: "3200" },
          { name: "Devilled Caranx Fish", description: "Spicy caranx fish stir-fry.", price: "2900" },

          // Seer Fish
          { name: "Fried Seer Fish (Large)", description: "Golden fried seer fish fillet.", price: "3000" },
          { name: "Traditional Seer Fish Milk Curry", description: "Seer fish in coconut milk curry.", price: "3200" },

          // Chicken
          { name: "Devilled Chicken", description: "Fiery chicken stir-fry.", price: "3000" },
          { name: "Traditional Spicy Chicken Curry", description: "Sri Lankan-style chicken curry.", price: "3600" },
        ],
      },
    ],
  };

  return (
    <Box
      sx={{
        pt: 8,
        pb: 12,
        background: "#fafafa",
      }}
    >

      <Helmet>
        {/* 🔹 SEO Title */}
        <title>Nature Lover’s Inn Restaurant | Authentic Sri Lankan Food in Kalametiya</title>

        {/* 🔹 Meta Description */}
        <meta
            name="description"
            content="Enjoy fresh juices, seafood, Sri Lankan curries and homemade meals at Nature Lover’s Inn Restaurant, located near the Kalametiya Bird Sanctuary. Healthy food made fresh daily."
        />

        {/* 🔹 Keywords */}
        <meta
            name="keywords"
            content="Kalametiya restaurant, Tangalle restaurant, Sri Lankan food, seafood Sri Lanka, Nature Lovers Inn restaurant, fresh juice Sri Lanka, homestyle cooking Kalametiya"
        />

        {/* 🔹 Author */}
        <meta name="author" content="Nature Lover’s Inn" />

        {/* 🔹 Canonical URL */}
        <link rel="canonical" href="https://www.natureloversinn.com/restaurant" />

        {/* 🔹 Open Graph for Facebook / WhatsApp / LinkedIn */}
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="Nature Lover’s Inn Restaurant | Sri Lankan Cuisine in Kalametiya" />
        <meta
            property="og:description"
            content="Taste fresh seafood, traditional Sri Lankan curries, juices, desserts and Asian fusion dishes at Nature Lover’s Inn Restaurant in Kalametiya."
        />
        <meta property="og:url" content="https://www.natureloversinn.com/restaurant" />
        <meta property="og:image" content="https://www.natureloversinn.com/restaurant" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nature Lover’s Inn Restaurant | Sri Lankan Food in Kalametiya" />
        <meta
            name="twitter:description"
            content="Fresh seafood, juices, and Sri Lankan curries at Nature Lover’s Inn Restaurant near Kalametiya Bird Sanctuary."
        />
        <meta name="twitter:image" content="https://www.natureloversinn.com/restaurant" />

        {/* 🔹 JSON-LD Schema: Restaurant */}
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Nature Lover’s Inn Restaurant",
          "image": "https://www.natureloversinn.com/restaurant",
          "servesCuisine": ["Sri Lankan", "Seafood", "Asian", "Western", "Juices"],
          "description": "Enjoy Sri Lankan curries, seafood, fruit juices and homestyle meals near the Kalametiya Bird Sanctuary.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kalametiya",
            "addressLocality": "Tangalle",
            "addressRegion": "Southern Province",
            "addressCountry": "Sri Lanka"
          },
          "telephone": "+94-760169518",
          "url": "https://www.natureloversinn.com/restaurant",
          "priceRange": "$$",
          "hasMenu": "https://www.natureloversinn.com/restaurant"
        }
        `}
        </script>
      </Helmet>

      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <MenuBookIcon sx={{ fontSize: "3rem", color: "#0077b6", mb: 1 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "'Cinzel', serif",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#000",
          }}
        >
          Nature Lover's Restaurant
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#0077b6",
            fontFamily: "'Lora', serif",
            fontStyle: "italic",
            mt: 1,
          }}
        >
          A Field Guide to the Flavors of Mannar
        </Typography>
      </Box>

      {/* Categories */}
      {menuData.categories.map((category, idx) => (
        <Box key={idx} sx={{ maxWidth: "900px", mx: "auto", mb: 8 }}>
          {/* Category Title */}
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: "bold",
              fontFamily: "'Cinzel', serif",
              borderBottom: "2px solid #0077b6",
              display: "inline-block",
              pb: 0.5,
            }}
          >
            {category.name}
          </Typography>

          <List>
            {category.items.map((item, i) => (
              <React.Fragment key={i}>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    py: 2,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0077b6" }}>
                      LKR {item.price}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontStyle: "italic", color: "text.secondary", mt: 0.5 }}
                  >
                    {item.description}
                  </Typography>
                </ListItem>
                {i !== category.items.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Restaurants;
