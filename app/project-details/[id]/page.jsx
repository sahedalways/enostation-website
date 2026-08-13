import ProjectDetails from '@/Components/Screens/Project_Details/ProjectDetails';
import { supabase } from '@/libs/supabaseClient';
import { buildMetadata, SITE_URL } from '@/utils/seo';

async function getProject(id) {
    try {
        const { data, error } = await supabase
            .from('project')
            .select('*')
            .eq('id', Number(id))
            .maybeSingle();

        if (error || !data) return null;
        return data;
    } catch (err) {
        return null;
    }
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const item = await getProject(id);

    if (!item) {
        return buildMetadata({
            title: 'Project Details',
            url: `${SITE_URL}/project-details/${id}`,
        });
    }

    const description =
        typeof item.desc === 'string'
            ? item.desc.replace(/<[^>]*>/g, '').slice(0, 160)
            : `Project ${item.title} by Enostation`;

    return buildMetadata({
        title: item.title,
        description,
        image: item.image,
        url: `${SITE_URL}/project-details/${id}`,
        type: 'article',
    });
}

export default async function ProjectDetailsPage({ params }) {
    await params;
    return <ProjectDetails />;
}
