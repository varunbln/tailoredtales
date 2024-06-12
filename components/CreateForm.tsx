"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MultiStepLoader } from "@/components/ui/MultiStepLoader";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Podcast title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  style: z.string().min(3, {
    message: "Style must be at least 3 characters.",
  }),
  language: z.string().min(3, {
    message: "Language must be at least 3 characters.",
  }),
  number_of_episodes: z.number().int().positive(),
  episode_duration: z.enum(["short", "medium", "long"]),
});

type Episode = {
  title: string;
  description: string;
};

const LoadingStates = [
  {
    text: "Starting podcast generation",
  },
  {
    text: "Generating podcast overview",
  },
  {
    text: "Planning podcast episodes",
  },
  {
    text: "Creating episode scripts",
  },
  {
    text: "Editing episode scripts",
  },
  {
    text: "Reviewing pilot episode",
  },
  {
    text: "Reviewing middle episodes",
  },
  {
    text: "Reviewing final episode",
  },
  {
    text: "Finalizing episode scripts",
  },
  {
    text: "Uploading episode scripts",
  },
  {
    text: "Publishing podcast",
  },
  {
    text: "Podcast generation complete",
  },
  {
    text: "Running final checks...this might take a while",
  },
];

export function CreateForm() {
  const [generatingEpisodes, setGeneratingEpisodes] = useState(false);

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setGeneratingEpisodes(true);
    const res = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (data.status !== 200) {
      console.log(data);
      alert("Error creating episodes");
      return;
    }
    router.push("/dashboard?updated=true");
    router.refresh();
    setGeneratingEpisodes(false);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Unveiling the Cosmos",
      description:
        "A podcast about the creation of the universe, the big bang, and more",
      style: "captivating, humorous and informative",
      language: "english",
      episode_duration: "medium",
      number_of_episodes: 6,
    },
  });

  return (
    <div className="md:w-2/3 w-4/5 md:h-2/3 h-full flex items-center justify-center">
      <MultiStepLoader
        loadingStates={LoadingStates}
        loading={generatingEpisodes}
        duration={8000}
        loop={false}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full h-full border-2 border-solid border-zinc-800 p-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Unveiling the Cosmos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="A podcast about the creation of the universe, the big bang, and more"
                  className="resize-none"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Input
                    placeholder="captivating, humorous and informative"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="episode_duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode Duration</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select the episode duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="long">Long</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number_of_episodes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Episodes</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="6"
                      type="number"
                      {...field}
                      onChange={(event) =>
                        field.onChange(Number(event.target.value))
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              className="mt-8 md:mt-0 rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Create Podcast
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
