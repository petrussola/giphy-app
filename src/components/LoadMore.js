import React from "react";
import { Button } from "@chakra-ui/react";

export default function LoadMore({ loadMoreHandler }) {
  return (
    <Button m="2rem" bg="gray.400" onClick={loadMoreHandler}>
      Load more..
    </Button>
  );
}