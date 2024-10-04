import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>Recipe Share</strong>, a community-driven platform
        for sharing and discovering delicious recipes. Our mission is to bring
        together food enthusiasts from all around the world to share their love
        for cooking and baking.
      </p>
      <p className="text-lg mb-4">
        Whether you&apos;re a seasoned chef or just starting out in the kitchen,
        our goal is to provide you with easy-to-follow recipes that are both
        creative and delicious.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        Our mission is to inspire home cooks to explore new flavors, share their
        favorite dishes, and connect with a global community of food lovers.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Meet the Team</h2>
      <p className="text-lg mb-4">
        We are a group of passionate foodies, chefs, and developers who believe
        that great food brings people together. From designing the platform to
        curating recipes, our team is dedicated to making your experience
        enjoyable.
      </p>
    </div>
  );
};

export default Page;
