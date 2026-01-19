import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen">
          {/* Sidebar using Material-UI Drawer */}
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: 240,
              "& .MuiDrawer-paper": {
                width: 240,
                boxSizing: "border-box",
                backgroundColor: "#333",
                color: "#fff",
              },
            }}
          >
            <List>
              <ListItem>
                <Link href="/" passHref>
                  <ListItemButton>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/use-ref-test" passHref>
                  <ListItemButton>
                    <ListItemText primary="useRef Test" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/use-memo-test" passHref>
                  <ListItemButton>
                    <ListItemText primary="useMemo Test" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Drawer>

          {/* Main Content */}
          <main style={{ marginLeft: 240, padding: "16px", flex: 1 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}