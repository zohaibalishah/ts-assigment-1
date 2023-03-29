"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const APIS_URL = "https://jsonplaceholder.typicode.com/posts";
function getPublicPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(APIS_URL);
        const data = yield response.json();
        return data;
    });
}
function renderTable() {
    return __awaiter(this, void 0, void 0, function* () {
        // called post api GET Method
        const posts = yield getPublicPosts();
        // get the table dev by id
        const app = document.getElementById('table_dev');
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
        app === null || app === void 0 ? void 0 : app.appendChild(table);
    });
}
renderTable();
