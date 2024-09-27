async function LoadImage({ Url, Css }: { Url: string; Css: string }) {
  console.log(Url, Css);
  // const res = await fetch(`${process.env.URL}/api/image/${Url}`);
  // const { image } = await res.json();

  // return <img src={image} className={Css} alt="..." />;
  return <p></p>;
}

export default LoadImage;
