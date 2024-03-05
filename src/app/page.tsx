import Header from "@/app/components/header";
import { Container, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify Shelf - Home",
};

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <Header />
      </Container>
    </main>
  );
}
