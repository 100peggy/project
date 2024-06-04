import supabase, { supabaseUrl } from './supabase';
export async function getHome() {
  let { data: make, error } = await supabase.from('make').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  console.log('getMake()', make);
  return make;
}
