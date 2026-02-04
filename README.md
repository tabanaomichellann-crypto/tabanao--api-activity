README.md Template:
1. Markdown
2. # RESTful API Activity - [Michell Ann Tabanao]

3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: BASE_URI is stored in .env to keep configuration separate from the code. This improves security, makes it easy to switch between environments, and allows changes without modifying the source code.
7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: Plural nouns are used to represent a collection of resources, not a single item. This follows RESTful API conventions, keeps endpoints consistent and predictable, and makes it clear when we are working with multiple records versus a specific one (e.g., /dishes/1).
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
    - Answer: 201 Created is used when a request successfully creates a new resource, while 200 OK is used when a request is successful but does not create a new resource, such as fetching or updating data.
12. - Why is it important to return `404` instead of just an empty array or a generic error?
13. - Answer: It’s important to return **`404 Not Found`** because it clearly tells the client that the requested resource does not exist. This avoids confusion, makes errors easier to handle on the client side, and follows RESTful standards, unlike returning an empty array or a generic error which can be misleading.

14.
15. **4. Testing:**
16. - ![alt text](<Screenshot 2026-01-28 181653.png>)
17. - ![alt text](image.png)
