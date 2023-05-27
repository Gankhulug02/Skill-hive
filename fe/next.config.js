/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "**", pathname: "**" },
      { protocol: "https", hostname: "**", pathname: "**" },
    ],
    domains: [
      "i.pinimg.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "media.istockphoto.com",
      "flagcdn.com",
      "static.vecteezy.com",
      "img.freepik.com",
      "encrypted-tbn0.gstatic.com",
      "i0.wp.com",
      "maqe-com-4-media-uploads.s3.ap-southeast-1.amazonaws.com",
      "blog.flipsnack.com",
      "elements-cover-images-0.imgix.net",
      "assets.website-files.com",
      "images.unsplash.com",
      "dw3i9sxi97owk.cloudfront.net",
      "dw3i9sxi97owk.cloudfront.net",
      "png.pngtree.com",
      "images.unsplash.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "marketplace.canva.com",
      "distancelearning-images.s3.eu-west-2.amazonaws.com",
      "images.ctfassets.net",
      "i.ytimg.com",
      "www.liquifiedcreative.com",
      "www.vinnove.com",
      "marketplace.canva.com",
    ],
  },
};

module.exports = nextConfig;
