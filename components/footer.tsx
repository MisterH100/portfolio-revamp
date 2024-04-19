import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export const Footer = () => {
  return (
    <footer className="pt-20 px-8 md:px-36 w-full min-h-[300px]">
      <Card className="border-none rounded-t-xl rounded-b-none">
        <CardHeader>
          <CardTitle>thehandsomedev</CardTitle>
          <CardDescription>Full-stack Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Crafted with passion and precision. © Handsome Nyathi 2024. All
            rights reserved. Built using cutting-edge technologies. Let's
            connect:
          </p>
          <ul className="flex justify-between items-center pt-4">
            <li>
              <Link
                className="text-accent"
                href="https://github.com/MisterH100"
                target="_blank"
              >
                • Github
              </Link>
            </li>
            <li>
              <Link
                className="text-accent"
                href="https://linkedin.com/in/handsome-nyathi-9a3116275"
                target="_blank"
              >
                • LinkedIn
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </footer>
  );
};
