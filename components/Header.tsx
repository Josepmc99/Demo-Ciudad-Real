"use client"

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center min-h-12 w-full px-6">
      <div className="gap-6 flex items-center">
        <h1 className="text-3xl font-semibold">HouseRenting</h1>
        <input placeholder=" Buscar propiedad..." className="w-[200px] p-1 rounded-md border-1" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Comprar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Comprar">Comprar</SelectItem>
            <SelectItem value="Alquilar">Alquilar</SelectItem>
            <SelectItem value="Vender">Vender</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Habitaciones" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 habitación">1 Habitación</SelectItem>
            <SelectItem value="2 habitaciones">2 Habitaciones</SelectItem>
            <SelectItem value="3 habitaciones">3 Habitaciones</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de vivienda" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">Casa</SelectItem>
            <SelectItem value="condo">Piso</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
