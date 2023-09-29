import Image from "next/image";
import PostImg from "../public/assets/images/alamine.jpeg";
import Link from "next/link";

const article = [
  {
    id: 1,
    title: "La Blockchain au Sénégal",
    href: "#",
    description:
      "Un potentiel inexploité pour les organisations gouvernementales et les entreprises.",
    date: "Lun 12 Juin 2023 ",
    datetime: "2020-03-16",
    category: { title: "Numérique", href: "#" },
    author: {
      name: "Mamadou Lamine",
      role: "Web developer",
      href: "https://smart-thinking.sn/2023/06/12/la-blockchain-au-senegal/",
      imageUrl:
        "https://smart-thinking.sn/2023/06/12/la-blockchain-au-senegal/",
    },
  },
  {
    id: 1,
    title: "L'intéligence artificielle en mileur scolaire",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum, obcaecati! Accusantium quos laboriosam et id voluptas beatae odio",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Intéligence artificielle", href: "#" },
    author: {
      name: "Mamadou DIASSY",
      role: "CEO Nema Studio",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorum, obcaecati! Accusantium quos laboriosam et id voluptas beatae odio",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
const Articles = () => {
  return (
    <div className=" grid grid-cols-1 gap-10">
      {article.map((post) => (
        <article
          key={post?.id}
          className="flex flex-col p-5 rounded-3xl  hover:bg-white/5 hover:ring-[0.2px] ring-textLight hover:ring-white/50 items-start justify-between
            "
        >
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post?.datetime} className="text-textdark">
              {post.date}
            </time>
            <Link
              href={post?.category?.href}
              className="relative z-10 rounded-full bg-white/5 px-3 py-1.5 font-medium text-white/90 hover:text-textOrange"
            >
              {post?.category?.title}
            </Link>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg  leading-6 text-bodyText font-semibold">
              <Link href={post?.href}>
                <span className="absolute inset-0" />
                {post?.title}
              </Link>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-textLight">
              {post?.description}
            </p>
          </div>
          <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-textOrange">
            <Link href={post.author.href} target="_blank" className="cursor-pointer">read more</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="ml-1 h-3 w-3 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Articles;
