import {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Lead,
  Small,
  Muted,
  Code,
} from "../../components/typography";
import Card from "@/components/card";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <H1>Contentful CMS Blog</H1>
          <Lead className="mt-4">
            A beautifully designed blog with comprehensive typography system
            built with Next.js and shadcn UI.
          </Lead>
        </div>

        {/* Sample Blog Content */}
        <Card className="mb-16">
          <Card.Header>
            <Card.Title>
              <H2 className="mb-0">Sample Blog Post</H2>
            </Card.Title>
            <Card.Description>
              <Muted>Published on January 8, 2026</Muted>
            </Card.Description>
          </Card.Header>

          <Card.Content>
            <Lead className="mb-6">
              This is how a typical blog post would look using our typography
              system. The lead paragraph draws attention and provides a
              compelling introduction.
            </Lead>

            <div className="space-y-6">
              <section>
                <H3>Introduction</H3>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </P>
              </section>

              <section>
                <H4>Key Benefits</H4>
                <P>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </P>
              </section>

              <section>
                <H5>Technical Details</H5>
                <P>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium. Use{" "}
                  <Code>npm install</Code> to get started with the project.
                </P>
              </section>
            </div>
          </Card.Content>
        </Card>

        {/* Footer */}
        <footer className="text-center border-t pt-8">
          <Small>Built with Next.js, shadcn/ui, and Tailwind CSS</Small>
        </footer>
      </div>
    </div>
  );
}
