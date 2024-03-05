import LogInOutButton from "@/app/components/logInOutButton";
import { Avatar, Stack } from "@mui/material";

import { getServerSession } from "next-auth";

export default async function Header() {
  const session = await getServerSession();

  return (
    <Stack direction="row" justifyContent="flex-end" spacing={2}>
      <LogInOutButton />
      <Avatar
        alt={session?.user?.name ?? undefined}
        src={session?.user?.image ?? undefined}
      />
    </Stack>
  );
}
