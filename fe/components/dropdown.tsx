import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  Typography,
  Grid,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [subCat, setSubCat] = useState<any>([]);
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
    <div className="relative inline-block text-left">
      <div>
        <div>
          <Link
            className="inline-flex justify-center w-full px-4 py-2 font-medium text-white bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setIsOpen(!isOpen)}
          >
            {categoryData.map((categoryData, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{categoryData.title}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </Link>
        </div>
      </div>
      {isOpen && (
        <span>
          <ul
            className={`absolute  flex  w-full mt-12 p-3  font-medium justify-between rounded-b-xl bg-slate-200 -ml-4   ${
              open ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-row flex-wrap gap-4 p-2 mt-1 ">
              {subCat.map((e: any, index: any) => (
                <Link key={index} href="#" underline="hover" color="#555555">
                  {e.subtitle}
                </Link>
              ))}
            </div>
          </ul>
        </span>
      )}
    </div>
  );
}
