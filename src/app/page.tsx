import {
  Table,
  TableRow,
  TableCaption,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ITable = {
  title: string;
  tg_name?: string;
  url?: string;
  description?: string;
};

export default function Home() {
  const chats: ITable[] = [
    {
      title: "Java/Kotlin/Scala",
      tg_name: "@dag_jvm",
      url: "",
      description: "чат для Java/Kotlin/Scala разработчиков",
    },
    {
      title: "GameDev",
      tg_name: "cg_dag",
      url: "",
      description: "чат по геймдеву",
    },
    {
      title: "FemSeagulls",
      tg_name: "fem_seagulls_chat",
      url: "",
      description: "чат женского дагестанского IT-сообщества",
    },
    {
      title: "Go-lang",
      tg_name: "golangdag",
      url: "",
      description: "чат Go-разработчиков",
    },
    {
      title: "frontendDag",
      tg_name: "frontendDag",
      url: "",
      description: "чат Frontend-разработчиков",
    },
    {
      title: "dag_it",
      tg_name: "dag_it",
      url: "",
      description: "чат сисадминов",
    },
    {
      title: "1C",
      tg_name: "rd_1c",
      url: "",
      description: "чат 1С-разработчиков",
    },
    {
      title: "Android",
      tg_name: "dagandroid",
      url: "",
      description: "чат Android разработчиков",
    },
    {
      title: "PHP",
      tg_name: "phpdagestan",
      url: "",
      description: "чат PHP-разработчиков",
    },
    {
      title: "Flutter",
      tg_name: "dagflutter",
      url: "",
      description: "чат Flutter-разработчикв",
    },
    {
      title: "QA",
      tg_name: "QA_Dagestan",
      url: "",
      description: "чат QA–тестировщиков",
    },
    {
      title: "dotnetchat",
      tg_name: "dagdotnetchat",
      url: "",
      description: "чат DotNet разработчиков",
    },
    {
      title: "iOS",
      tg_name: "",
      url: "https://t.me/+0vs3HDIg3tNmYjVi",
      description: "Чат iOS-разработчиков ",
    },
    {
      title: "стартап-комьюнити",
      tg_name: "startdag_chat",
      url: "",
      description: "",
    },
    {
      title: "mountaindesign",
      tg_name: "mountaindesign",
      url: "",
      description: "чат дизайнеров",
    },
    {
      title: "designandchat",
      tg_name: "designandchat",
      url: "",
      description: "чат дизайнеров",
    },
  ];

  const channels: ITable[] = [
    {title: "IT_DAGESTAN", tg_name: "@IT_DAGESTAN", url: "", description: "IT-мероприятия"},
    {title: "ITsovet05", tg_name: "@ITsovet05", url: "", description: "канал совета при Минцифре Дагестана"},
    {title: "BountyOnCoffee", tg_name: "@BountyOnCoffee", url: "", description: "про ИБ от @r0hack"},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24">
      <h1>Дагестанские IT чаты и каналы</h1>
      <h3 className="mt-12">Чаты:</h3>
      <Table>
        <TableBody>
          {chats.map((chat, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium max-md:hidden">{chat.title}</TableCell>
              <TableCell>{chat.tg_name}</TableCell>
              <TableCell className="text-right max-md:hidden">{chat.description}</TableCell>
              <TableCell className="text-right">
                {chat.url ? (
                  <Button asChild>
                    <Link href={chat.url}>Перейти</Link>
                  </Button>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h3 className="mt-12">Каналы:</h3>
      <Table>
        <TableBody>
          {channels.map((chat, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium max-md:hidden">{chat.title}</TableCell>
              <TableCell>{chat.tg_name}</TableCell>
              <TableCell className="text-right max-md:hidden">{chat.description}</TableCell>
              <TableCell className="text-right">
                {chat.url ? (
                  <Button asChild>
                    <Link href={chat.url}>Перейти</Link>
                  </Button>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p className="mt-20">Список дополняется...</p>
    </main>
  );
}
