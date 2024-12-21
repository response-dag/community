import {
  Table,
  TableRow,
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
      url: "https://t.me/dag_jvm",
      description: "чат для Java/Kotlin/Scala разработчиков",
    },
    {
      title: "GameDev",
      tg_name: "@cg_dag",
      url: "https://t.me/cg_dag",
      description: "чат по геймдеву",
    },
    {
      title: "FemSeagulls",
      tg_name: "@fem_seagulls_chat",
      url: "https://t.me/fem_seagulls_chat",
      description: "чат женского дагестанского IT-сообщества",
    },
    {
      title: "Go-lang",
      tg_name: "@golangdag",
      url: "https://t.me/golangdag",
      description: "чат Go-разработчиков",
    },
    {
      title: "frontendDag",
      tg_name: "@frontendDag",
      url: "https://t.me/frontendDag",
      description: "чат Frontend-разработчиков",
    },
    {
      title: "dag_it",
      tg_name: "@dag_it",
      url: "https://t.me/dag_it",
      description: "чат сисадминов",
    },
    {
      title: "1C",
      tg_name: "@rd_1c",
      url: "https://t.me/rd_1c",
      description: "чат 1С-разработчиков",
    },
    {
      title: "Android",
      tg_name: "@dagandroid",
      url: "https://t.me/dagandroid",
      description: "чат Android разработчиков",
    },
    {
      title: "PHP",
      tg_name: "@phpdagestan",
      url: "https://t.me/dag_jvm",
      description: "чат PHP-разработчиков",
    },
    {
      title: "Flutter",
      tg_name: "@dagflutter",
      url: "https://t.me/dagflutter",
      description: "чат Flutter-разработчикв",
    },
    {
      title: "QA",
      tg_name: "@QA_Dagestan",
      url: "https://t.me/QA_Dagestan",
      description: "чат QA–тестировщиков",
    },
    {
      title: "dotnetchat",
      tg_name: "@dagdotnetchat",
      url: "https://t.me/dagdotnetchat",
      description: "чат DotNet разработчиков",
    },
    {
      title: "iOS",
      tg_name: "iOS",
      url: "https://t.me/+0vs3HDIg3tNmYjVi",
      description: "Чат iOS-разработчиков ",
    },
    {
      title: "стартап-комьюнити",
      tg_name: "@startdag_chat",
      url: "https://t.me/startdag_chat",
      description: "",
    },
    {
      title: "mountaindesign",
      tg_name: "@mountaindesign",
      url: "https://t.me/mountaindesign",
      description: "чат дизайнеров",
    },
    {
      title: "designandchat",
      tg_name: "@designandchat",
      url: "https://t.me/designandchat",
      description: "чат дизайнеров",
    },
  ];

  const channels: ITable[] = [
    {title: "IT_DAGESTAN", tg_name: "@IT_DAGESTAN", url: "https://t.me/IT_DAGESTAN", description: "IT-мероприятия"},
    {title: "ITsovet05", tg_name: "@ITsovet05", url: "https://t.me/ITsovet05", description: "канал совета при Минцифре Дагестана"},
    {title: "BountyOnCoffee", tg_name: "@BountyOnCoffee", url: "https://t.me/BountyOnCoffee", description: "про ИБ от @r0hack"},
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
