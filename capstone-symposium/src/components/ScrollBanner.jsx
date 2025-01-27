export const ScrollBanner = () => {
  let logos = [
    {
      id: 0,
      dim: "w-64 h-20",
      img: "camosun_innovates.png",
      alt: "Camosun Innovates",
    },
    { id: 1, dim: "w-64 h-20", img: "3treeslogo_h.svg", alt: "3 Trees" },
    {
      id: 2,
      dim: "w-20 h-20",
      img: "arma_automotive.png",
      alt: "Arma Automotive",
    },
    {
      id: 3,
      dim: "w-32 h-20",
      img: "raino_dance_light.png",
      alt: "Raino Dance",
    },
    { id: 4, dim: "w-28 h-20", img: "woo_woo.png", alt: "Woo Woo" },
  ];
  return (
    <>
      <ul className="scroll-banner">
        {logos.map((logo) => {
          return (
            <li key={logo.id}>
              <img
                className={logo.dim}
                src={`/images/sponsors/${logo.img}`}
                alt={logo.alt}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
