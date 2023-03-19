import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import BigNav from "~/components/Navigation/BigNav";

const About: NextPage = () => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-5xl">
      <BigNav isHome={false} currentPage={router.route} />
    </div>
  );
};

export default About;
