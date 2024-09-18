# Directus config

## Tables

> [!NOTE]
>
> - All fields where no data type is specified are Input fields
> - Asterisks specify fields as  required fields
> - Directus is creating `id`-fields with autoincrement automatically

1. `technologies`
   1. `id`
   2. `label`\*
   3. `fa_icon`\*
   4. `link`\*
2. `companies`
   1. `id`
   2. `name`\*
   3. `role`\*
   4. `technologies` (Many to Many with technologies table)
   5. `start_date` (Date)\*
   6. `end_date` (Date)
3. `schools`
   1. `id`
   2. `name`\*
   3. `branch`\*
   4. `start_date` (Date)\*
   5. `end_date` (Date)
4. `projects`
   1. `id`
   2. `github_link`
   3. `name`\*
   4. `short_description`\*
   5. `technologies` (Many to Many with technologies table)
   6. `description` (WYSIWYG)

> [!TIP]
>
> If done right you should now be able to see two intermediate tables (for the Many to Many relations):
>
> ![image-20240918083944929](./assets/image-20240918083944929.png)

