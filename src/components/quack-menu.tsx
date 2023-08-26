import { Breadcrumbs } from "@aws-amplify/ui-react";
import QuackLogo from "./quack-logo";

export default function QuackMenu() {
  return (
    <Breadcrumbs
      items={[
        {
          href: '#',
          label: 'Home',
        },
        {
          href: '#',
          label: 'Components',
        },
        {
          href: '#',
          label: 'Breadcrumbs',
        },
      ]}
      separator={null}
    />
  );
}
