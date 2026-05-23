import { redirect } from "next/navigation";

const Page = ({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) => {
  const params = new URLSearchParams();
  const useCase = searchParams?.useCase;
  const category = searchParams?.category;
  const group = searchParams?.group;

  const value = Array.isArray(useCase)
    ? useCase[0]
    : useCase ?? (Array.isArray(category) ? category[0] : category);
  const groupValue = Array.isArray(group) ? group[0] : group;

  if (value) {
    params.set("useCase", value);
  } else if (groupValue) {
    params.set("group", groupValue);
  }

  redirect(
    params.toString()
      ? `/case-studies?${params.toString()}`
      : "/case-studies",
  );
};

export default Page;
