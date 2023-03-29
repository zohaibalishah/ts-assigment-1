
const APIS_URL: string = "https://jsonplaceholder.typicode.com/posts"

interface POST {
    id: number;
    title: string;
    body: string;
    userId:number
}

async function getPublicPosts(): Promise<POST[]> {
    const response = await fetch(APIS_URL);
    const data = await response.json();
    return data;
}

// functon for generate dynamic table and return nothing type is void
async function renderTable(): Promise<void> {
    // called post api GET Method
    const posts = await getPublicPosts();
    

    // create table
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        ${posts.map(post => `
          <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          </tr>
        `).join("")}
      </tbody>
    `;
    // get the table dev by id
    const app = document.getElementById('table_dev');
    //after creating table append them in table_dev
    app?.appendChild(table);
}

renderTable()