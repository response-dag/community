import {
  Table,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Channels, Chats } from '../../constants';

export type ITable = {
  title: string;
  tg_name?: string;
  url?: string;
  description?: string;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24">
      <h1>Дагестанские IT чаты и каналы</h1>
      <h3 className="mt-12">Чаты:</h3>
      <Table>
        <TableBody>
          {Chats.map((chat, idx) => (
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
          {Channels.map((chat, idx) => (
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
