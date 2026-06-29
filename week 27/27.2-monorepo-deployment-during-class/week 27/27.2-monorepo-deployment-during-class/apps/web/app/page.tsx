import {prismaClient} from "db/client"

export default async function Home() {
  const users = await prismaClient.user.findMany();
  
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

// as we know nextjs provide us SSG static site generation, it means when we do bun run build then it static generate that page and store somewhere so when user come to website then it loads fast but if we add more users in database then here not reflect so make it dynamic we use force-dynamic thing so it will fetch all things as it add in database
export const dynamic = 'force-dynamic';