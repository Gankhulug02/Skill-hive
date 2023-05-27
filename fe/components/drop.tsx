import { useState } from "react";
import { Typography, Grid, Link } from "@mui/material";
import { ClassNames } from "@emotion/react";

export default function Drop() {
  const [open, setOpen] = useState(false);
  const [subCat, setSubCat] = useState<any>([]);
  const [Cat, setCat] = useState<any>([]);
  const categoryData = [
    {
      title: "График дизайн",
      subCategory: [
        { subtitle: "Лого дизайн" },
        { subtitle: "Нэрийн хуудасний дизайн" },
        { subtitle: "Брошур гарын авлага" },
        { subtitle: "Каталог дизайн" },
        { subtitle: "Ном хавтасны дизайн" },
        { subtitle: "Веб & Мобайл дизайн" },
        { subtitle: "Веб баннер" },
        { subtitle: "Иллюстрэйшн" },
        { subtitle: "Баглаа боодлын дизайн" },
        { subtitle: "Портрет иллюстрэйшн" },
        { subtitle: "Брэндбүүк" },
        { subtitle: "Архитектур & Интерьер дизайн" },
        { subtitle: "Тоглоомын дизайн" },
        { subtitle: "Каталог дизайн" },
        { subtitle: "Пресентацны дизайн" },
        { subtitle: "AR филтер (IG, Snapchat)" },
        { subtitle: "Комик иллюстрэйшн" },
        { subtitle: "Хэвлэл дизайн" },
        { subtitle: "3D дизайн" },
      ],
    },
    {
      title: "Дижитал маркетинг",
      subCategory: [
        { subtitle: "Сошиал медиа маркетинг" },
        { subtitle: "Инфлюнсер" },
        { subtitle: "Контент маркетинг" },
        { subtitle: "Видео маркетинг" },
        { subtitle: "Хайлтын системийн маркетинг (SEM)" },
        { subtitle: "Ном & Цахим номын маркетинг" },
        { subtitle: "Онлайн худалдаа маркетинг" },
        { subtitle: "Хайлтын системийн оновчлол (SEO)" },
        { subtitle: "Подкаст маркетинг" },
        { subtitle: "Имэйл маркетинг" },
        { subtitle: "Дэлгэцийн сурталчилгаа" },
      ],
    },
    {
      title: "Бичих ба орчуулга",
      subCategory: [
        { subtitle: "Блог & Нийтлэл" },
        { subtitle: "Ном редакторлах" },
        { subtitle: "CV бичих" },
        { subtitle: "И-мэйл бичих" },
        { subtitle: "Яриа бичих" },
        { subtitle: "Орчуулга" },
        { subtitle: "Албан бичиг бичих" },
        { subtitle: "Бичгийн алдаа хянах, засварлах" },
        { subtitle: "Подкаст маркетинг" },
        { subtitle: "Имэйл маркетинг" },
        { subtitle: "Дэлгэцийн сурталчилгаа" },
      ],
    },
  ];

  return (
    <div className="bg-slate-100">
      <div className="max-w-screen-xl flex  items-center p-4 ">
        <div className="flex">
          {categoryData.map((categoryData, index) => (
            <Link
              key={index}
              href="#"
              underline="none"
              onClick={() => {
                setOpen(true);
                setCat(categoryData.title);
              }}
              className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
              sx={{ color: "#333333" }}
            >
              {/* {categoryData.title} */}
              BROWSE
            </Link>
          ))}
          <p className="hidden md:block">Text to hide on small screens</p>

          <ul
            className={`absolute  flex  w-full mt-12 p-3  font-medium justify-between rounded-b-xl bg-slate-200 -ml-4   ${
              open ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-row flex-wrap gap-4 p-2 mt-1 ">
              {subCat.map((e: any, index: number) => (
                <Link key={index} href="#" underline="hover" color="#555555">
                  {e.subtitle}
                </Link>
              ))}
            </div>
          </ul>

          {categoryData.map((categoryData, index) => (
            <Link
              key={index}
              href="#"
              underline="none"
              onClick={() => {
                setOpen(true);
                setSubCat(categoryData.subCategory);
              }}
              className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
              sx={{ color: "#333333" }}
            >
              {categoryData.title}
            </Link>
          ))}

          <p className="hidden md:block">Text to hide on small screens</p>

          <ul
            className={`absolute  flex  w-full mt-12 p-3  font-medium justify-between rounded-b-xl bg-slate-200 -ml-4   ${
              open ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-row flex-wrap gap-4 p-2 mt-1 ">
              {subCat.map((e: any, index: number) => (
                <Link key={index} href="#" underline="hover" color="#555555">
                  {e.subtitle}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
