import { useQuery } from '@tanstack/react-query';
import { supabase } from '../libs/supabaseClient';

const fetchProjects = async () => {
    const { data, error } = await supabase
        .from('project')
        .select('*')
        .order('id', { ascending: true });

    if (error) throw error;
    return data;
};

export const usePortfolioProject = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
        staleTime: 1000 * 60 * 5,
    });
};
