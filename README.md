[footwearAPI](https://footwear-api.vercel.app/).

# footwearAPI
footwearAPI offers a collection of footwear with details like name, brand, color, price, and image — ideal for learning, prototyping, and practice projects.
## get all products
Returns all available products.
**Endpoint:**  
```
/products
```
## get specific product
Returns product specified by ID.
**Endpoint:**  
```
/products/{id}
```
## Examples
```
GET /products
GET /products/2
```
## Example Response
```json
{
  "id": 2,
  "title": "Jada Renew",
  "colour": "White",
  "brand": "PUMA",
  "price": 39,
  "desc": "Jada Renew blends tennis-inspired style with everyday comfort. Designed with a slightly elevated profile for a retro vibe, they feature a mix of durable leather materials for long-lasting wear. A SOFTFOAM+ sockliner delivers cushioned support underfoot, keeping you comfortable with every step.",
  "image": "https://footwear-api.vercel.app/img/jada_renew.png"
}
```
