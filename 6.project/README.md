    ├── csv
    │     ├── address
    │     │     ├── city.csv
    │     │     ├── countryBusan.csv
    │     │     ├── countryGyeonggi.csv
    │     │     └── countrySeoul.csv
    │     ├── item
    │     │     └── item.csv
    │     ├── name
    │     │     ├── firstName.csv
    │     │     └── lastName.csv
    │     ├── store
    │     │     ├── brand.csv
    │     │     └── store.csv
    │     ├── result **분리
    │     │     ├── user.csv
    │     │     ├── store.csv
    │     │     ├── order.csv
    │     │     ├── item.csv
    │     │     └── orderitem.csv
    └── generator
          ├── Generator.js  **중복
          ├── common
          │     ├── AddressGenerator.js
          │     ├── IdGenerator.js
          │     └── LoadId.js
          ├── item
          │     ├── Generator.js
          │     └── GetItemInfo.js
          ├── order
          │     ├── Generator.js
          │     └── OrderAtGenerator.js
          ├── orderitem
          │     └── OrderAtGenerator.js
          ├── store
          │     ├── Generator.js
          │     └── NameGenerator.js
          └── user
                ├── Generator.js
                ├── BirthdateGenerator.js
                ├── GenderGenerator.js
                └── NameGenerator.js
