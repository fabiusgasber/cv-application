export const inputList = [
    {
        form: "personal",
        title: "Personal Information",
        displayField: "name",
        id: "0",
        fields: [
        { label: "Full Name", name: "name", type: "text", key: crypto.randomUUID()},
        { label: "E-Mail", name: "email", type: "email", key: crypto.randomUUID()},
        { label: "Phone number", name: "tel", type: "tel", key: crypto.randomUUID()},
        { label: "Address", name: "address", type: "text", key: crypto.randomUUID()},
        ]
    },
    {
        form: "education",
        title: "Education",
        displayField: "school",
        id: "1",
        fields: [
        { label: "School/University", name: "school", type: "text", key: crypto.randomUUID()},
        { label: "Degree", name: "degree", type: "text", key: crypto.randomUUID()},
        { label: "Start Date", name: "start", type: "text", key: crypto.randomUUID()},
        { label: "End Date", name: "end", type: "text", key: crypto.randomUUID()},
        { label: "Location", name: "location", type: "text", key: crypto.randomUUID()},
        ]
    },
    {
        form: "work",
        title: "Work Experience",
        displayField: "company",
        id: "2",
        fields: [
        { label: "Company name", name: "company", type: "text", key: crypto.randomUUID()},
        { label: "Position Title", name: "position", type: "text", key: crypto.randomUUID()},
        { label: "Description", name: "description", type: "text", key: crypto.randomUUID()},
        { label: "Start Date", name: "start", type: "text", key: crypto.randomUUID()},
        { label: "End Date", name: "end", type: "text", key: crypto.randomUUID()},
        { label: "Location", name: "location", type: "text", key: crypto.randomUUID()},
        ]
    }
]