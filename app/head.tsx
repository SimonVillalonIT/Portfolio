import Script from "next/script";

export default function Head({ children }) {
  return (
    <>
      <title></title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Script src="https://dev.anthonyfessy.com/lottie.min.js" />
    </>
  );
}
