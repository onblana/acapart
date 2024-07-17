import { NextRequest, NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";
import Post from "@/types";

let db: Database | undefined;

async function getDb() {
  if (db) return db;
  db = await open({
    filename: "src/lib/acapart.sqlite3",
    driver: sqlite3.Database,
  });
  return db;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const db = await getDb();
    const posts: Post[] = await db.all<Post[]>("SELECT * FROM posts");
    return NextResponse.json(posts);
  } catch (e) {
    console.error("error!: ", e);
    return NextResponse.json(e);
  }
}
