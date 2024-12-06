import React from "react";
import Link from "next/link";

export const error = async (err: any) => {
  console.error(err);
  return {
    props: {error: err.message},
  };
};
