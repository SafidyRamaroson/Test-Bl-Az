"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link"
import { X, Home, MapPin, Activity, Menu } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"


export function MenuDrawer() {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <button>
                    <Menu className='text-white w-6 h-6' />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <DialogTitle></DialogTitle>
                <div className="mx-auto w-full">
                    <DrawerHeader className="flex justify-start border-b border-gray-200 pb-2 bg-primary">
                        <DrawerClose asChild>
                            <button
                                aria-label="Close menu"
                                className="cursor-pointer"
                            >
                                <X className="w-6 h-6 text-primary-foreground rounded-full" />
                            </button>
                        </DrawerClose>
                    </DrawerHeader>
                    {/* Menu Items */}
                    <div className="p-6 flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 text-left">
                            <li className="w-full">
                                <Link
                                    href="#apartments"
                                    className="flex items-center gap-2 w-full p-2 font-bold hover:text-primary transition-colors"
                                >
                                    <Home className="w-5 h-5 text-gray-700" />
                                    Accueil
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    href="#localisation"
                                    className="flex items-center gap-2 w-full p-2 font-bold hover:text-primary transition-colors"
                                >
                                    <MapPin className="w-5 h-5 text-gray-700" />
                                    Localisation
                                </Link>
                            </li>

                            <li className="w-full">
                                <Link
                                    href="#activities"
                                    className="flex items-center gap-2 w-full p-2 font-bold hover:text-primary transition-colors"
                                >
                                    <Activity className="w-5 h-5 text-gray-700" />
                                    Activités
                                </Link>
                            </li>
                        </ul>
                        <Link
                            href="#reserve"
                        >
                            <Button variant="secondary" className="w-full rounded-full p-2">
                                Réservér
                            </Button>
                        </Link>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
