export const initial_data = {
  root: {
    name: "Root",
    path: "root",
    type: "folder",
    isRoot: true,
    isOpen: true,
    size: "",
    creator_name: "",
    created_date: "",
    children: ["root/apps", "root/pictures"]
  },
  "root/apps": {
    name: "apps",
    path: "root/apps",
    type: "folder",
    size: "",
    creator_name: "",
    created_date: "",
    children: ["root/apps/readme.md"]
  },
  "root/apps/readme.md": {
    name: "readme.md",
    path: "root/apps/readme.md",
    type: "file",
    size: "",
    creator_name: "",
    created_date: "",
    content: "Thanks for reading me me. But there is nothing here."
  },
  "root/pictures": {
    name: "pictures",
    path: "root/pictures",
    type: "folder",
    size: "",
    creator_name: "",
    created_date: "",
    children: ["root/pictures/trip", "root/pictures/vlog"]
  },
  "root/pictures/trip": {
    name: "trip",
    path: "root/pictures/trip",
    type: "folder",
    size: "",
    creator_name: "",
    created_date: "",
    children: ["root/pictures/trip/treeview"]
  },
  "root/pictures/trip/treeview": {
    name: "treeview",
    path: "root/pictures/trip/treeview",
    type: "folder",
    size: "",
    creator_name: "",
    created_date: "",
    children: []
  },
  "root/pictures/vlog": {
    name: "vlog",
    path: "root/pictures/vlog",
    type: "folder",
    size: "",
    creator_name: "",
    created_date: "",
    children: []
  }
};

export const initialData = {
  name: "Root",
  toggled: false,
  size: "",
  creator_name: "",
  created_date: "",
  path: "",
  fileType: "folder",
  children: [
    {
      name: "Apps",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "folder",
      children: []
    },
    {
      name: "Pictures",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "folder"
    },
    {
      name: "Videos",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "folder"
    },
    {
      name: "Docs",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "folder",
      children: [
        {
          name: "Work",
          size: "",
          creator_name: "",
          created_date: "",
          path: "Root/Docs",
          fileType: "folder",
          children: [
            {
              name: "e.pdf",
              size: "",
              creator_name: "",
              created_date: "",
              path: "Root/Docs/Work",
              fileType: "file"
              // children: []
            },
            {
              name: "f.ts",
              size: "",
              creator_name: "",
              created_date: "",
              path: "Root/Docs/Work",
              fileType: "file"
              // children: []
            }
          ]
        },
        {
          name: "c.pdf",
          size: "",
          creator_name: "",
          created_date: "",
          path: "Root/Docs",
          fileType: "file"
          // children: [""]
        },
        {
          name: "d.docx",
          size: "",
          creator_name: "",
          created_date: "",
          path: "Root/Docs",
          fileType: "file"
          // children: [""]
        }
      ]
    },
    {
      name: "a.pdf",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "file"
      // children: []
    },
    {
      name: "b.jpg",
      size: "",
      creator_name: "",
      created_date: "",
      path: "Root",
      fileType: "file"
      // children: []
    }
  ]
};
