<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  let announcements = data.announcements;
</script>

<ul>
  {#each announcements as ann}
    <li>Announcement Created On: {ann.created_at}</li>
    <li>Announcement: {ann.announcement}</li>
    <ul>
      {#each ann.announcement_comments as comm}
        <li>Comment Created On: {comm.created_at}</li>
        <li>Comment: {comm.comment}</li>
      {/each}
    </ul>
  {/each}
</ul>