sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note note: KakeK
    activate server
    server-->>browser: 302 Found
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->browser: HTML document
    deadctivate server

    browser->>server GET 
    https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->browser: CSS document
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->browser: JS document
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->browser: [{content: "TEST3", date: "2024-12-02T16:58:59.459Z"},…]
    deadctivate server


sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->browser: CSS document
    deadctivate server

    browser->>server GET  https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->browser: JS domunt
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->browser: [{content: "TEST3", date: "2024-12-02T16:59:04.476Z"},…]
    deadctivate server

sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note note: KakeK
    activate server
    server-->>browser: 302 Found
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->browser: HTML document
    deadctivate server

    browser->>server GET 
    https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->browser: CSS document
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->browser: JS document
    deadctivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->browser: [{content: "TEST3", date: "2024-12-02T16:58:59.459Z"},…]
    deadctivate server

sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: "Joulu", date: "2024-12-03T13:58:22.123Z"}
    activate server
    server-->>browser: 201 Created
    deadctivate server