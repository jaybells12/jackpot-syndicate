"use client";

import useSwr from "swr";
import { Box, Heading } from "@chakra-ui/react";
import { Logo } from "@components/Logo";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSwr("/api/bookings", fetcher);

  if (error) {
    return (
      <Heading as={"h1"} onClick={() => console.log(error)}>
        Error, Failed to load data
      </Heading>
    );
  } else if (!data) {
    return <h1>Loading...</h1>;
  }

  return <Logo width={"500px"} height={"300px"} />;
}
