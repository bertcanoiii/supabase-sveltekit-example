import { supabase } from "$lib/supabaseClient";
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const { data, } = await supabase
        .from("announcementsv1")
        .select(`
            id,
            created_at,
            announcement,
            announcement_comments (
                id,
                announcement_id,
                created_at,
                comment
            )
        `);
    console.log( data )
    return {
        announcements: data ?? [],
    };
}) satisfies PageServerLoad;