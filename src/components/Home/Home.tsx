import { Badge, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useRepos } from "../../services/repos";
import { useUser } from "../../services/users";

const USERNAME = "sergjun";

export function Home() {
  const { data: user } = useUser(USERNAME);
  const { data: repos } = useRepos(USERNAME);
  return (
    <Flex direction="column" alignItems="center" paddingTop="32px">
      <Image src={user?.avatar_url} alt="avatar" width="80px" height="80px" />
      <Text fontWeight="bold" fontSize="24px" marginTop="32px">
        {user?.name}
      </Text>
      <Text fontWeight="500" marginTop="8px">
        {user?.bio}
      </Text>
      <Text fontWeight="bold" fontSize="24px" marginTop="40px">
        Repos
      </Text>
      {repos?.map((repo) => (
        <Link
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="400px"
          height="48px"
          backgroundColor="#0e0326"
          marginTop="16px"
          paddingLeft="16px"
          paddingRight="16px"
          href={repo.html_url}
          target="_blank"
          _focus={{ boxShadow: "none" }}
          _hover={{ textDecoration: "none" }}
        >
          <Text>{repo.name}</Text>
          <Badge colorScheme="green">{repo.language}</Badge>
        </Link>
      ))}
    </Flex>
  );
}
